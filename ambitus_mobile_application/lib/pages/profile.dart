import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:pi5_flutter_application/pages/eventDetailPage.dart';

import '../model/model.dart';
import '../services/api_services.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _profilePageState();
}

class _profilePageState extends State<ProfilePage> {
  bool isLoading = false;
  bool isContentLoading = false;

  final storage = FlutterSecureStorage();
  String? userToken;
  String? userImage;
  String? username;
  String? userLevel;
  List<dynamic> userMedals = [];

  @override
  void initState() {
    super.initState();

    loadToken();
  }

//Carregar token do usuário
  Future<void> loadToken() async {
    setState(() {
      isLoading = true;
    });
    String? token = await storage.read(key: "token");
    if (token != null) {
      setState(() {
        userToken = token;
      });
    }
    getEventsFunction(userToken);
    loadUserInfo();
    setState(() {
      isLoading = false;
    });
  }

  List<Event> events = [];

  //Carregar eventos usando token do usuário
  void getEventsFunction(String? userToken) async {
    setState(() {
      isContentLoading = true;
    });
    try {
      if (userToken != null) {
        var response = await getEvents(userToken);
        if (response.statusCode == 200) {
          var eventDataList = json.decode(utf8.decode(response.bodyBytes));
          events = eventDataList
              .map<Event>((eventData) => Event.fromJson(eventData))
              .toList();
        }
      }
    } catch (e) {
      print(e);
    }
    setState(() {
      isContentLoading = false;
    });
  }

//Carregar informações do usuário
  Future<void> loadUserInfo() async {
    setState(() {
      isLoading = true;
    });
    String? name = await storage.read(key: "name");
    String? image = await storage.read(key: "image");
    String? level = await storage.read(key: "level");
    String? medalsString = await storage.read(key: "medals");

    if (name != null) {
      setState(() {
        username = name;
      });
    } else {
      setState(() {
        username = "";
      });
    }
    if (image != null) {
      setState(() {
        userImage = image;
      });
    } else {
      setState(() {
        userImage = "";
      });
    }
    if (level != null) {
      setState(() {
        userLevel = level;
      });
    } else {
      setState(() {
        userLevel = "0";
      });
    }

    try {
      var response = await getUserData(userToken!);
      if (response.statusCode == 200 ||
          response.statusCode == 201 ||
          response.statusCode == 202) {
        var responseBody = jsonDecode(response.body);

        print(responseBody);

        var medalsList = responseBody['medalhas'] as List<dynamic>;
        var newMedals = medalsList
            .map((medal) => {
                  'id': medal['id'],
                  'nome': medal['nome'],
                  'descricao': medal['descricao'],
                  'req_nivel': medal['req_nivel'],
                  'imagem': medal['imagem'].toString().split(',').last,
                })
            .toList();

        setState(() {
          userMedals = newMedals;
        });

        String updatedMedalsString = jsonEncode(newMedals);
        await storage.write(key: "medals", value: updatedMedalsString);
      }
    } catch (e) {
      print(e);
    }

    setState(() {
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Perfil',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: const Color(0xff606c38),
      ),
      body: ListView(
        children: [
          Stack(
            children: [
              Column(
                children: [
                  Container(
                    color: const Color(0xff606c38),
                    height: 100,
                  ),
                  Container(
                    color: Colors.white,
                    height: 175,
                    width: double.infinity,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: EdgeInsets.only(left: 16.0),
                          child: username != null
                              ? Text(
                                  username!,
                                  style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold),
                                )
                              : Text(""),
                        ),
                        Padding(
                          padding: EdgeInsets.all(16.0),
                          child: Container(
                            constraints: BoxConstraints(maxWidth: 150),
                            child: FilledButton.icon(
                              onPressed: () {},
                              icon: const Icon(Icons.star),
                              label: Row(
                                children: [
                                  const Text('Lev.'),
                                  const SizedBox(width: 4),
                                  Text(userLevel ?? ''),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Positioned(
                top: 35,
                left: 25,
                child: ClipOval(
                  child: Container(
                    width: 120,
                    height: 120,
                    color: Colors.blue,
                    child: Image.memory(
                      base64Decode(userImage ?? ''),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ],
          ),
          Container(
            height: 250,
            color: Colors.green,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text('Medalhas'),
                ),
                Flexible(
                  child: ListView.builder(
                    padding: const EdgeInsets.all(16),
                    scrollDirection: Axis.horizontal,
                    itemCount: userMedals.length,
                    itemBuilder: (context, index) {
                      var medal = userMedals[index];
                      return Container(
                        width: 150,
                        height: 150,
                        margin: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: Colors.red,
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              width: 100,
                              height: 100,
                              decoration: BoxDecoration(
                                image: DecorationImage(
                                  image: MemoryImage(
                                    base64Decode(medal['imagem']),
                                  ),
                                  fit: BoxFit.contain,
                                ),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(
                              medal['nome'],
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          isContentLoading
              ? Container(
                  child: Center(
                    child: Container(
                      width: 100,
                      height: 100,
                      child: Center(
                        child: SpinKitPulse(
                          color: const Color(0xff606c38),
                          size: 50.0,
                        ),
                      ),
                    ),
                  ),
                )
              : events.isEmpty && userToken != null
                  ? Padding(
                      padding: EdgeInsets.all(16),
                      child: Center(
                        child: Column(
                          children: [
                            const Text(
                              "Nenhum evento ainda. Que tal criar um agora mesmo?",
                              style: TextStyle(
                                fontSize: 16,
                                color: Color.fromARGB(179, 25, 93, 27),
                                fontWeight: FontWeight.w600,
                              ),
                              textAlign: TextAlign.center,
                            ),
                            SizedBox(height: 10),
                            Container(
                              height: 80,
                              width: 80,
                              child:
                                  Image.asset('assets/images/freepik-wind.png'),
                            )
                          ],
                        ),
                      ))
                  : Padding(
                      padding: EdgeInsets.all(16),
                      child: Column(
                        children: events.map((event) {
                          final nome = event.nome;
                          final descricao = event.descricao;
                          final data = event.data;
                          final hora = event.hora;
                          final tipo = event.tipo;
                          final imagem = event.image;

                          var cvTipo = event.tipo.toString();
                          var tipoReplaced = cvTipo.replaceAll('_', ' ');
                          var tipoLower = tipoReplaced.toLowerCase();

                          return GestureDetector(
                            onTap: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => eventDetailPage(
                                            event: event,
                                            hideSignUpButton: false,
                                            hideParticipantsList: false,
                                          )));
                            },
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(6.0),
                                side: BorderSide(color: Colors.grey, width: 1),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(8),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Expanded(
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.start,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            nome,
                                            style: const TextStyle(
                                              fontSize: 16,
                                              fontWeight: FontWeight.w600,
                                              color: Colors.black,
                                            ),
                                          ),
                                          Text("Categoria: $tipoLower"),
                                          Text("Data: $data"),
                                        ],
                                      ),
                                    ),
                                    const SizedBox(width: 16.0),
                                    isContentLoading
                                        ? Container(
                                            width: 50,
                                            height: 50,
                                            child: Center(
                                              child: SpinKitPulse(
                                                color: const Color(0xff606c38),
                                                size: 50.0,
                                              ),
                                            ),
                                          )
                                        : ClipRRect(
                                            borderRadius:
                                                BorderRadius.circular(8),
                                            child: imagem == null
                                                ? ClipRRect(
                                                    child: Image.asset(
                                                      'assets/images/eventPlaceholder.jpg',
                                                      fit: BoxFit.cover,
                                                      height: 80,
                                                      width: 100,
                                                    ),
                                                  )
                                                : Image.memory(
                                                    base64Decode(event.image!
                                                        .replaceAll(
                                                            RegExp(r'\s+'),
                                                            '')),
                                                    fit: BoxFit.cover,
                                                    height: 80,
                                                    width: 100,
                                                  ),
                                          ),
                                  ],
                                ),
                              ),
                            ),
                          );
                        }).toList(),
                      ),
                    )
        ],
      ),
    );
  }
}
