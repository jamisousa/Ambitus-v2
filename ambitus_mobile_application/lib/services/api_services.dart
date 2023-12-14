import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

final storage = FlutterSecureStorage();

Future<http.Response> signUpUser(name, age, gender, email, pwd, image) {
  return http.post(
    Uri.parse(
        "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/cadastro"),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, dynamic>{
      'nome': name.toString(),
      'idade': age,
      'sexo': gender.toString(),
      'email': email.toString(),
      'senha': pwd.toString(),
      'image': image.toString(),
    }),
  );
}

Future<http.Response> loginUser(email, pwd) {
  return http.post(
    Uri.parse(
        'http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/login'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'email': email,
      'senha': pwd,
    }),
  );
}

Future<http.Response> signUpEvent(
    title, description, place, date, time, type, image, token) {
  return http.post(
    Uri.parse(
        "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/cadastro"),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
    body: jsonEncode(<String, dynamic>{
      'titulo': title.toString(),
      'descricao': description.toString(),
      'local': place.toString(),
      'data': date.substring(0, 10),
      'hora': time.toString(),
      'tipo': type.toString(),
      'image': image.toString(),
    }),
  );
}

Future<http.Response> getEvents(String token) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos");

  var response = await http.get(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}


Future<http.Response> getUserData(String token) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/dados");

  var response = await http.get(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}


Future<http.Response> sendEventSubscription(String token, int id) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/inscricao/$id");

  var response = await http.put(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> getEventByType(String token, String type) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/$type");

  var response = await http.get(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> getEventParticipants(String token, int id) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/participantes/$id");

  var response = await http.get(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> getUserEvents(String token) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/meuseventos");

  var response = await http.get(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> cancelEventSubscription(String token, int id) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/cancelarInscricao/$id");

  var response = await http.delete(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> deleteEvent(String token, int id) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/$id");

  var response = await http.delete(
    url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token,
    },
  );

  return response;
}

Future<http.Response> updateEvent(
    title, description, place, date, time, type, image, token, id) async {
  var url = Uri.parse(
      "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/editarEvento/$id");

  var response = await http.put(url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': token,
      },
      body: jsonEncode(<String, dynamic>{
        'titulo': title.toString(),
        'descricao': description.toString(),
        'local': place.toString(),
        'data': date.substring(0, 10),
        'hora': time.toString(),
        'tipo': type.toString(),
        'image': image.toString(),
      }));

  return response;
}

/* funções FlutterSecureStorage */

Future<void> setToken(String token) async {
  await storage.write(key: "token", value: token);
}

Future<String?> getToken() async {
  var res = await storage.read(key: "token");
  return res;
}

Future<void> setUserName(String name) async {
  await storage.write(key: "name", value: name);
}

Future<String?> getUserName() async {
  var res = await storage.read(key: "name");
  return res;
}

Future<void> setUserImage(String image) async {
  await storage.write(key: "image", value: image);
}

Future<String?> getUserImage() async {
  var res = await storage.read(key: "image");
  return res;
}

Future<void> setUserEmail(String email) async {
  await storage.write(key: "image", value: email);
}

Future<String?> getUserEmail() async {
  var res = await storage.read(key: "email");
  return res;
}


Future<void> setUserLevel(String level) async {
  await storage.write(key: "level", value: level);
}

Future<String?> getUserLevel() async {
  var res = await storage.read(key: "level");
  return res;
}
