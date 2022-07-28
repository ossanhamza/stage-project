class Client {
    Id=0;
    constructor(Nom,Adresse,Telephone,Id){
        this.Nom=Nom;
        this.Adresse=Adresse;
        this.Telephone=Telephone;
        this.Id=Id;
        Client.Id++;
    }
}