class Facture {
    Id=0;
    constructor(Numero_facture,Id_client,Id){
        this.Numero_facture=Numero_facture;
        this.Id_client=Id_client;
        this.Id=Id;
        Facture.Id++;
        this.list_client=[];
        this.list_facture=[];
    }
    add(){
        this.list_client.push(this.Id_client);
        this.list_facture.push(this.Numero_facture);
    }
}