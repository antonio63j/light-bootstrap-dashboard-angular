export class Usuario {
    
    constructor(
        public _id: string,
        public nombre : String,
        public fnacimiento: Number,
        public email : string,
        public telefono : Number
    ){} 

    static CreateDefault(): User {
        return new User('', '', 0, '', 0);
    }
}