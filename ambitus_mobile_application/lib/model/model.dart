class Event {
  int id;
  String nome;
  String data;
  String hora;
  String descricao;
  String tipo;
  String? image;
  String local;

  Event(
      {required this.id,
      required this.nome,
      required this.data,
      required this.hora,
      required this.descricao,
      required this.tipo,
      required this.local,
      this.image});

  factory Event.fromJson(Map<String, dynamic> json) {
    return Event(
      id: json['id'] ?? 0,
      nome: json['titulo'] ?? '',
      descricao: json['descricao'] ?? '',
      data: json['data'] ?? '',
      hora: json['hora'] ?? '',
      image: json['image'],
      tipo: json['tipo'] ?? '',
      local: json['local'] ?? '',
    );
  }
}

class Participant {
  final int id;
  final String nome;
  final String email;
  final String? image;

  Participant({
    required this.id,
    required this.nome,
    required this.email,
    this.image,
  });

  factory Participant.fromJson(Map<String, dynamic> json) {
    return Participant(
      id: json['id'],
      nome: json['nome'],
      email: json['email'],
      image: json['image'],
    );
  }
}

class Medal {
  final int id;
  final String nome;
  final String descricao;
  final int reqNivel;
  final String imagem;

  Medal({
    required this.id,
    required this.nome,
    required this.descricao,
    required this.reqNivel,
    required this.imagem,
  });

  factory Medal.fromJson(Map<String, dynamic> json) {
    return Medal(
      id: json['id'],
      nome: json['nome'],
      descricao: json['descricao'],
      reqNivel: json['req_nivel'],
      imagem: json['imagem'],
    );
  }
}

class UserData {
  final String nome;
  final String email;
  final String imagem;
  final String nivel;
  final List<Medal> medals;

  UserData({
    required this.nome,
    required this.email,
    required this.imagem,
    required this.nivel,
    required this.medals,
  });

  factory UserData.fromJson(Map<String, dynamic> json) {
    var medalList = json['medalhas'] as List<dynamic>;
    List<Medal> parsedMedals = medalList.map((medal) {
      return Medal.fromJson(medal);
    }).toList();

    return UserData(
      nome: json['nome'],
      email: json['email'],
      imagem: json['imagem'],
      nivel: json['nivel'],
      medals: parsedMedals,
    );
  }
}
