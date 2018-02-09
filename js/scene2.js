function scene2() {
  // Setup Stage
  var set = document.querySelector('#sets')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  joffreyContainer = document.createElement('div')
  stage.append(joffreyContainer)

  // Character 1
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  nedContainer.style.height = '44%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'


  // Character 2
  joffreyContainer.style.position = 'absolute'
  joffreyContainer.style.width = '8%'
  joffreyContainer.style.height = '30%'
  joffreyContainer.style.top = '50%'
  joffreyContainer.style.left = '58%'
  joffrey = document.querySelector('#joffrey')
  joffreyContainer.append(joffrey)
  kingarmour = document.querySelector('#king')
  joffreyContainer.append(kingarmour)
  joffrey.style.position = 'absolute'
  joffrey.style.top = '0'
  joffrey.style.bottom = '0'
  kingarmour.style.position = 'absolute'
  kingarmour.style.bottom = '0'
  kingarmour.style.top = '45%'
  kingarmour.style.right = '15%'



  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
  sword.style.top = '74%'
  sword.style.left = '36%'
  })
  // Stage direction 2
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
  sword.style.top = '68%'
  sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

}
