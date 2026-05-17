import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const habilidades = [
  "Java, Spring Boot, Spring Security, JPA/Hibernate",
  "APIs REST e autenticação JWT",
  "MySQL e modelagem de banco de dados",
  "HTML, CSS e JavaScript",
  "Consumo e integração de APIs",
  "Git/GitHub e Maven",
  "CRUD, arquitetura em camadas e versionamento de código",
];

export default function App() {
  return (
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

    {/* CABEÇALHO / DADOS PESSOAIS */}
    <View style={styles.headerContainer}>
      <Text style={styles.nomeCompleto}>Caio Victor de Moura Paschoal</Text>
      <Text style={styles.subtitulo}>Estudante de ADS</Text>
      
      <StatusBar style="auto" />
    </View>

    <View style={styles.secao}>
      <Text style={styles.dadosContato}>Email: caiopaschoal1997@gmail.com</Text>
      <Text style={styles.dadosContato}>Telefone: (81)984063225</Text>
      <Text style={styles.dadosContato}>Linkedin: </Text>
      <Text style={styles.dadosContato}>GitHub: </Text>
    </View>

    {/* RESUMO */}
    <View style={styles.secao}>
    <Text style={styles.tituloSecao}>Meu Objetivo</Text>
    <View style={styles.linhaDivisoria} />
    <Text style={styles.objetivo}>Procurando por vagas de estagio/junior</Text>
    </View>

    <View style={styles.secao}>
    <Text style={styles.tituloSecao}>Formação Academica</Text>
    <View style={styles.linhaDivisoria} />
    <Text style={styles.formacao}>Analise e Desenvolvimento de Sistemas</Text>
    <Text style={styles.formacao}>Faculdade Senac</Text>
    <Text style={styles.formacao}>Periodo: 2025 - 2027</Text>
    </View>

    <View style={styles.secao}>
    <Text style={styles.tituloSecao}>Habilidades Tecnicas</Text>
    <View style={styles.linhaDivisoria} />
    {habilidades.map((item, index) => (
    <View style={styles.card} key={index}>
      <Text style={styles.texto}>• {item}</Text>
    </View>
    ))}
  
    </View>

    <View style={styles.secao}>
    <Text style={styles.tituloSecao}>Projetos</Text>
    <View style={styles.linhaDivisoria} />
    <Text style={styles.subtitulo2}>Sorteie Animes</Text>
    <Text style={styles.projetos}>Desenvolvimento de uma aplicação web para sorteio aleatório de animes utilizando a API Jikan. O projeto exibe informações como nome, descrição, imagem e quantidade de episódios do anime sorteado. Desenvolvido com HTML, CSS e JavaScript, focando em consumo de API e manipulação dinâmica de dados no front-end.</Text>
    <Text style={styles.subtitulo2}>Workshop springboot4 jpa</Text>
    <Text style={styles.projetos}>Projeto acadêmico desenvolvido com Java e Spring Boot para criação de uma API REST utilizando JPA/Hibernate. O sistema implementa operações CRUD, relacionamento entre entidades, persistência de dados e arquitetura em camadas (resource, service e repository), utilizando banco de dados H2 para testes. O projeto teve como foco o aprendizado de desenvolvimento back-end, APIs REST e integração com banco de dados.</Text>
    <Text style={styles.subtitulo2}>Gestão de atividades complementar</Text>
    <Text style={styles.projetos}>Desenvolvimento de uma API REST completa para gerenciamento acadêmico, utilizando Java e Spring Boot. O sistema realiza controle de alunos, cursos, submissões e certificados, contando com autenticação JWT, controle de acesso por perfis (ADMIN, COORDENADOR e ALUNO), upload de arquivos e envio automático de e-mails. O projeto utiliza Spring Security, Spring Data JPA e MySQL, seguindo arquitetura em camadas e boas práticas no desenvolvimento back-end.</Text>
  
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20, 
    paddingTop: 75,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  nomeCompleto:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  secao:{
    marginBottom: 30
  },
  tituloSecao:{
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#1a1a1a',
  },
  linhaDivisoria: {
    height: 1,
    backgroundColor: '#454545',
    marginVertical: 8,
    width: '100%',
  },
  subtitulo2:{
    fontSize:20,
    fontWeight:'semibold',
    color:'#1a1a1a'
  },
  projetos:{
    marginBottom:20
  }
});
