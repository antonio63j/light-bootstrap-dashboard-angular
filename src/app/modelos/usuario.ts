export class Usuario {
        constructor(
        public _id: string,
        public nombre : String,
        public fnacimiento: Number,
        public email : string,
        public telefono : Number
    ) { }

    static CreateDefault(): Usuario {
        return new Usuario ('', '', 0, '', 0);
    }
}