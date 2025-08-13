import 'package:flutter/material.dart';
import 'chat_screen.dart';

void main() {
  runApp(const GeminiChatApp());
}

class GeminiChatApp extends StatelessWidget {
  const GeminiChatApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Gemini Chatbot',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const ChatScreen(),
    );
  }
}
