//Singleton-GOF Factory Method-GOF
export class Database{
  private static database: Database
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ){}
  connect(): void{
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`)
  }

  static getDatabase(host: string,user: string, password: string): Database{
    if(Database.database){
      console.log('retornando instancia, ja criada')
      return Database.database
    }
    console.log('Criando nova instancia')
    Database.database = new Database(host, user, password)
    return Database.database
  }
}

const db1= Database.getDatabase('localhost', 'root', '123456')
db1.connect();

const db2= Database.getDatabase('localhost', 'root', '123456')
db2.connect();

const db3= Database.getDatabase('localhost', 'root', '123456')
db3.connect();

const db4= Database.getDatabase('localhost', 'root', '123456')
db4.connect();
