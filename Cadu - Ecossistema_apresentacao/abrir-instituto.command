#!/bin/bash
# Duplo clique no Finder para instalar dependências, iniciar o site e abrir o browser.
# Requer Node.js: https://nodejs.org (versão LTS)

cd "$(dirname "$0")" || exit 1

if ! command -v npm >/dev/null 2>&1; then
  osascript -e 'display alert "Falta o Node.js" message "1) Vá a https://nodejs.org\n2) Descarregue a versão LTS e instale\n3) Volte a fazer duplo clique neste ficheiro." as informational'
  exit 1
fi

osascript -e 'display notification "A preparar o site (a primeira vez pode demorar)…" with title "Instituto CADU"'

echo ""
echo "  --------------------------------------------"
echo "  Instituto / CADU  ·  a abrir o servidor"
echo "  --------------------------------------------"
echo ""

echo "→ A instalar dependências (pasta web)…"
npm run install-web || {
  osascript -e 'display alert "Erro ao instalar" message "Copie o texto desta janela e envie para quem o ajuda com o projeto." as warning'
  exit 1
}

echo "→ A iniciar o site… (deixe esta janela aberta)"
npm run dev &
DEV_PID=$!

for tentativa in $(seq 1 120); do
  for porta in 3000 3001 3002 3003; do
    codigo=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${porta}/" 2>/dev/null || echo "000")
    if [ "$codigo" = "200" ] || [ "$codigo" = "304" ]; then
      echo "→ Servidor a responder em http://127.0.0.1:${porta}/"
      open "http://127.0.0.1:${porta}/"
      osascript -e 'display notification "O site deve ter aberto no Safari ou Chrome. Não feche esta janela enquanto usar o site." with title "Instituto CADU"'
      echo ""
      echo "  Para fechar o site: prima Ctrl+C nesta janela."
      echo ""
      wait $DEV_PID
      exit 0
    fi
  done
  sleep 1
done

echo "→ Não detetei o servidor a tempo. Tente abrir manualmente: http://localhost:3000"
open "http://localhost:3000/" 2>/dev/null || true
wait $DEV_PID
