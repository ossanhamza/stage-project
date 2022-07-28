class User extends (Client,Facture) {
    Id=0;
    constructor(Id,Email,Password,Isadmin){
        this.Email=Email;
        this.Password=Password;
        this.Isadmin=Isadmin;
        User.Id++;
        this.Id=Id;}
    
    

    }


