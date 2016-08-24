var test = {
  questions: [
  {title: 'Вопрос № 1',
    answers: [
      {text: 'Вариант ответа № 1'},
      {text: 'Вариант ответа № 2'},
      {text: 'Вариант ответа № 3'}
    ]
  },
  {title: 'Вопрос № 2',
      answers: [
        {text: 'Вариант ответа № 1'},
        {text: 'Вариант ответа № 2'},
        {text: 'Вариант ответа № 3'}
      ]
    },
    {title: 'Вопрос № 3',
    answers: [
      {text: 'Вариант ответа № 1'},
      {text: 'Вариант ответа № 2'},
      {text: 'Вариант ответа № 3'}
    ]
  }],
  generateQuestions: function () {
    var headerText = document.createTextNode("Тест по программированию");
    var header = document.createElement("h2");
    header.appendChild(headerText);
    header.setAttribute("align", "center");
    document.body.appendChild(header);
      for (var i = 0; i < test.questions.length; i++) {
        var question = (i+1) + '. ' + test.questions[i].title;
        var questionTitle = document.createTextNode(question);
        var questionTitlePara = document.createElement("p");
        document.body.appendChild(questionTitlePara);
        questionTitlePara.appendChild(questionTitle);
          for (var key in test.questions[i].answers) {
          var answer = test.questions[i].answers[key].text;
          var container = document.createElement('div');
          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.id = "answer-" + (+key + 1) + '-' + (+i + 1);
          var label = document.createElement('label');
          label.htmlFor = "answer-" + (+key + 1) + '-' + (+i + 1);
          label.appendChild(document.createTextNode(answer));
          document.body.appendChild(container);
          container.appendChild(checkbox);
          container.appendChild(label);
          }
        }
      },
      createButton: function () {
        var newButtonBr = document.createElement('br');
        document.body.appendChild(newButtonBr);
        var newButtonDiv = document.createElement('div');
        newButtonDiv.id = 'newButtonDiv'
        newButtonDiv.setAttribute("align", "center");
        document.body.appendChild(newButtonDiv);
        var newButton = document.createElement("input");
        newButton.type = "submit";
        newButton.value = "Проверить мои результаты";
        document.getElementById('newButtonDiv').appendChild(newButton);
      }
    }
test.generateQuestions()
test.createButton()
