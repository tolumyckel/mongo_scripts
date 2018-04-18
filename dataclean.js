db.raw_loan.find({ addr_state: {$exists:true}}).forEach(function (doc1) {
    if (doc1.State == null || typeof doc1.State == "undefined") {
        db.raw_loan.update({ _id: doc1._id }, {
            loan_amnt: doc1.loan_amnt, term: doc1.term, int_rate: doc1.int_rate, annual_inc: doc1.annual_inc, issue_d: doc1.issue_d,
            loan_status: doc1.loan_status, desc: doc1.desc, purpose: doc1.purpose, addr_state: doc1.addr_state, region: doc1.region, dti: doc1.dti
        });
                            }
                                            });
