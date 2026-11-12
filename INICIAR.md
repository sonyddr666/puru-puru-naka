# Pururu com Chat (Modo IA do Google) e Voz (Grok TTS)

## Abrir no Windows (Sem `.env` e sem API Key)

1. Abra o PowerShell na pasta do projeto e inicie o servidor:

   ```powershell
   node bin/pururu.mjs --dist --open
   ```

2. O navegador abrirá em [http://127.0.0.1:8099](http://127.0.0.1:8099).
3. No painel **Chat do Pururu**, clique em **Contas** (ele abre automaticamente se ainda não estiver conectado):
   - **1. Google IA (Chat):** Clique em **Conectar Google** e entre em uma conta Google existente (ou crie uma).
   - **2. Grok (Voz grátis):** Clique em **Conectar Grok** e faça login com a **mesma conta Google** (*Continue with Google*) para liberar o TTS gratuito.
   - Assim que logar, o status muda automaticamente para **Conectado ✓** (ou clique em **Verificar acesso**).

## Conversar e brincar

- Digite na barra de chat ou clique no microfone para falar. O texto aparece na barra em tempo real e é enviado ao terminar a fala.
- Clique em **Live** para conversar por voz de forma contínua.
- A voz usa Grok Ara em português do Brasil direto pela sessão conectada do navegador (sem precisar copiar cookies).
- Clique em **Brincar → Sala em chamas** para abrir o cenário com chamas animadas e a caneca interativa.
