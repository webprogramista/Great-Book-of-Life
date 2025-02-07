document.addEventListener("DOMContentLoaded", function () { 
  const langSelector = document.getElementById("language-selector"); 
  const title = document.getElementById("title"); 
  const description = document.getElementById("description"); 
  const langButton = document.getElementById("lang-button"); 
  
  // Функція для завантаження JSON-файлу відповідної мови 
  function loadLanguage(lang) { 
    fetch(lang/${lang}.json) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error(Language file not found: ${lang}.json); 
        } 
      return response.json(); 
    }) 
      
      .then(data => { 
      title.textContent = data.title; 
      description.textContent = data.description; 
      langButton.textContent = data.button; 
      localStorage.setItem("language", lang);  
    // Зберігаємо вибір мови 
    }) 
      .catch(error => console.error("Error loading language:", error)); } 
  
  // Завантаження збереженої мови або за замовчуванням "en" 
  const savedLang = localStorage.getItem("language") || "en"; 
  langSelector.value = savedLang; loadLanguage(savedLang); 
  
  // Обробник зміни мови 
  langSelector.addEventListener("change", function () { 
    loadLanguage(this.value); 
  }); 
}); 
