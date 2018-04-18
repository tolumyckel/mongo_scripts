db.raw_loan.find({ region: {$exists: false}}).batchSize(10).forEach(function(doc1)
{
    if (doc1.State == null && doc1.region == null) {
        //print(doc1.State)
        if (typeof doc1.State == "undefined") {
            db.raw_loan.updateMany({ State: "" }, { $set: { region: 'N/A' } })
        }
        else{
        db.region.find({ addr_state: doc1.addr_state }).forEach(function (doc2) {
            //print (doc2);
            //if (doc1.region == null) {
            if (doc1.addr_state === doc2.addr_state || doc1.State === doc2.addr_state) {

                try {
                    if (doc1.State == null) {
                        if (doc1.addr_state !== '') {
                            db.raw_loan.updateMany({ addr_state: doc1.addr_state }, { $set: { region: doc2.region } })
                        }
                    }
                    if (doc1.addr_state == null) {
                        /*if(doc1.State === ''){
                            db.raw_loan.update({ State: "" }, { $set: { region: null } })
                        }*/
                        if (doc1.State !== '') {

                            db.raw_loan.updateMany({ State: doc1.State }, { $set: { region: doc2.region } })
                        }
                        else {
                            db.raw_loan.updateMany({ State: doc1.State }, { $set: { region: 'N/A' } })
                        }
                    }
                }
                catch (e) {
                    print("Errror");
                    print(e);
                }
            }
            //}
        });
    }
    }
    if (doc1.addr_state == null && doc1.region == null) {
        //print(typeof doc1.addr_state)
        if (typeof doc1.addr_state == "undefined") {
            db.raw_loan.updateMany({ addr_state: "" }, { $set: { region: 'N/A' } })
        }
        else{
        db.region.find({ addr_state: doc1.State }).forEach(function (doc2) {
            //print (doc2);
            //if (doc1.region == null) {
            if (doc1.addr_state === doc2.addr_state || doc1.State === doc2.addr_state) {

                try {
                    if (doc1.State == null) {
                        if (doc1.addr_state !== '') {
                            db.raw_loan.updateMany({ addr_state: doc1.addr_state }, { $set: { region: doc2.region } })
                        }
                    }
                    if (doc1.addr_state == null) {
                        if(doc1.State === ''){
                            db.raw_loan.updateMany({ State: doc1.State }, { $set: { region: 'N/A' } })
                        }
                        else {

                            db.raw_loan.updateMany({ State: doc1.State }, { $set: { region: doc2.region } })
                        }
                    }
                }
                catch (e) {
                    print("Errror");
                    print(e);
                }
            }
            //}
        });
    }
    }
										});