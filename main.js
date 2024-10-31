document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input");
    const chatOutput = document.getElementById("chat-output");
    
    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.textContent = "Você: " + userInput.value;
        chatOutput.appendChild(userMessage);
        
        const aiMessage = document.createElement("div");
        aiMessage.textContent = "IA: " + responderAI(userInput.value);
        chatOutput.appendChild(aiMessage);
        
        userInput.value = "";
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});

function responderAI(mensagem) {
    mensagem = mensagem.toLowerCase(); // Converte a mensagem para minúsculas
    const respostas = {
        "como você está?": "Estou apenas um programa, mas estou aqui para ajudar!",
        "qual é o seu nome?": "Eu sou uma inteligência artificial sem nome, mas você pode me chamar de IA!",
        "o que você pode fazer?": "Posso responder perguntas e ajudar com informações básicas.",
        "quem criou você?": "Fui criado por desenvolvedores usando tecnologia de inteligência artificial.",
        "qual é o sentido da vida?": "Essa é uma pergunta filosófica! Mas muitas pessoas dizem que é buscar felicidade e conhecimento."
    };

    // Retorna a resposta correspondente, ou uma resposta padrão se a pergunta não estiver na lista
    return respostas[mensagem] || "Desculpe, não entendi sua pergunta.";
}