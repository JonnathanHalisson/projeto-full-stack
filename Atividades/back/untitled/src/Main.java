public class Main {
    public static void main(String[] args) {

        class Pessoa {
            private final String nome;
            private int idade;

            public Pessoa(String nome, int idade) {
                this.nome = nome;
                this.idade = idade;
            }

            public String setNome(String nome) {
                this.nome = nome;
            }

            public String getNome() {
                return nome;
            }

            public int getIdade() {
                return idade;
            }

            public void setIdade(int idade) {
                this.idade = idade;
            }
        }

        Pessoa pessoa = new Pessoa("jon", 12);

        pessoa;

        System.out.println(pessoa.getNome());

    }
}