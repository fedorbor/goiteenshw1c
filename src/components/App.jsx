export const App = () => {
   
   const myName = 'fedor';

 
   const favoriteWebsite = { name: 'Google', url: 'https://www.google.com/' };
 
   const describe='фотка';
   const number1 = 5;
   const number2 = 10;
   const sum = number1 + number2;
  const urlpic="https://tourweek.ru/file/image?path=uploads/gallery_media/263_1_%2816%29.jpg&s=b7031d924949ed48603013c83562eae8"
   
   const colors = ['Червоний', 'Синій', 'Зелений'];
 
   return (
     <div>
       {/* Виведення тексту імені у елементі h1 */}
       <h1>{myName}</h1>
 
       {/* Виведення елементу p з текстом "Ласкаво просимо до нашого сайту!" */}
       <p>Ласкаво просимо до нашого сайту!</p>
 
       {/* Виведення зображення у елементі img */}
       <img src={urlpic} alt={describe} />
 
       {/* Виведення посилання у елементі a */}
       <a href={favoriteWebsite.url}>{favoriteWebsite.name}</a>
 
       {/* Виведення результату обчислення суми чисел у елементі p */}
       <p>Сума чисел {number1} і {number2} дорівнює {sum}.</p>
 
       {/* Виведення кольорів у списку ul */}
       <ul>
         {colors.map((color, index) => (
           <li key={index}>{color}</li>
         ))}
       </ul>
     </div>
   );
};
