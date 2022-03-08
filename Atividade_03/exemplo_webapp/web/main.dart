import 'dart:html';

InputElement? inserirTarefa;
DivElement? uiLista;
ButtonElement? buttonLimpar;

List<Tarefa> listTarefas = [];

class Tarefa {
  int id = 0;
  final String texto;

  Tarefa(this.texto) {
    id++;
  }
}

void main() {
  querySelector('#output-h1')?.text = "Lista de Tarefas";

  inserirTarefa = querySelector("#tarefa") as InputElement;
  uiLista = querySelector("#tarefa-lista") as DivElement;
  buttonLimpar = querySelector("#limpar") as ButtonElement;

  inserirTarefa?.onChange.listen(addTarefa);
  buttonLimpar?.onClick.listen(removerTodasTarefas);
}

void addTarefa(Event event) {
  Tarefa tarefa = Tarefa((inserirTarefa?.value).toString());
  listTarefas.add(tarefa);

  atualizarLista();
  inserirTarefa?.value = '';
}

void atualizarLista() {
  uiLista?.children.clear();
  listTarefas.forEach((tarefa) {
    Element div = Element.div();
    ButtonElement buttonRemover = ButtonElement();
    Element span = Element.span();

    buttonRemover.text = 'X';
    buttonRemover.id = tarefa.id.toString();
    buttonRemover.onClick.listen(removerTarefa);

    span.text = tarefa.texto;

    div.children.add(buttonRemover);
    div.children.add(span);
    uiLista?.children.add(div);
  });
}

void removerTarefa(MouseEvent event) {
  event.stopPropagation();

  Element? div = (event.currentTarget as Element).parent;
  Element button = (event.currentTarget as Element);

  int key = int.parse(button.id[0]);
  listTarefas.removeWhere((tarefa) => tarefa.id == key);

  div?.remove();
}

void removerTodasTarefas(MouseEvent event) {
  uiLista?.children.clear();
  listTarefas.clear();
}
