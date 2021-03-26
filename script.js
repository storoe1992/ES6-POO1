function Consultorio(nombre,pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

Consultorio.prototype.addPaciente = function(paciente) {
    this.pacientes.push(paciente);
}

Consultorio.prototype.getPacienteByName = function(nombre) {
    return this.pacientes.find(pac => pac.getNombre() === nombre);
}

Consultorio.prototype.printAllPacientes = function() {
    return this.pacientes.forEach(pac => {
        console.log(`Nombre del paciente: ${pac.getNombre()}`)
        console.log(`Edad del paciente: ${pac.getEdad()}`)
        console.log(`Rut del paciente: ${pac.getRut()}`)
        console.log(`Diagnóstico del paciente: ${pac.getDiagnostico()}`)
    });
}

function Paciente(nombre,edad,rut,diagnostico){
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
    Object.defineProperty(this, "_getNombre", {get: function() {return _nombre}});
    Object.defineProperty(this, "_getEdad", {get: function() {return _edad}});
    Object.defineProperty(this, "_getRut", {get: function() {return _rut}});
    Object.defineProperty(this, "_getDiagnostico", {get: function() {return _diagnostico}});
    Object.defineProperty(this,"_setNombre",{set: function(nombre) {_nombre = nombre}});
    Object.defineProperty(this,"_setEdad",{set: function(edad) {_edad = edad}});
    Object.defineProperty(this,"_setRut",{set: function(rut) {_rut = rut}});
    Object.defineProperty(this,"_setDiagnostico",{set: function(diagnostico) {_diagnostico = diagnostico}});
}

Paciente.prototype.getNombre = function() {
    return this._getNombre;
}
Paciente.prototype.getEdad = function() {
    return this._getEdad;
}
Paciente.prototype.getRut = function() {
    return this._getRut;
}
Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
}

Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
}
Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
}
Paciente.prototype.setRut = function(rut) {
    this._setRut = rut;
}
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
}

const paciente1 = new Paciente("Pedro", 21, "12345678-9", "Otitis");
const paciente2 = new Paciente("Juan", 21, "12345678-9", "Miopía");

const consultorio = new Consultorio("Carlos Finlay", [paciente1, paciente2]);

//Buscar paciente por nombre

const pacienteJuan = consultorio.getPacienteByName("Juan");
console.log(pacienteJuan.getNombre());

// Imprimir todos los pacientes
consultorio.printAllPacientes();



