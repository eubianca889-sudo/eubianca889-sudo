class HomeController {
index(req, res) {
return res.render("home", {
titulo: "Sistema Escolar",
turmas: [
{ nome: "Informática 1", alunos: 42 },
{ nome: "Informática 2", alunos: 38 },
],
});
}
}
export default new HomeController();