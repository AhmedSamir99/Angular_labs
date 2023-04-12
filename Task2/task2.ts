class Account {
    AccountNumber: number;
    Balance: number;

    debitAmount(amount: number) {
        
    }
    creditAmount(amount: number) {
        
    }

    getBalance() {
              
    }
}

interface IAccount{

    Date_of_opening: Date;
    
    addCustomer();
    removeCustomer();

}

class Current_Account  extends Account implements IAccount {
    
    interest_rate:number;
    Date_of_opening: Date;
    addCustomer(){}
    removeCustomer(){}
    

    
}

class Saving_Account  extends Account implements IAccount {
    
    min_Balance:number;
    Date_of_opening: Date;
    addCustomer(){}
    removeCustomer(){

    }

    
}


