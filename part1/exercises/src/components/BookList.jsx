export default function BookList() {
   let pageTitle = "Books To Read List";
   let book1 = "https://m.media-amazon.com/images/M/MV5BMWE1NDM1ZGMtM2E2NS00NTllLTgwMjEtYjIxNWYzMzExMzZkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg";
   let book2 = "https://m.media-amazon.com/images/M/MV5BYjY4MjNjZDEtNmJkMy00MjA4LWI3NmMtODFjZDM3ZTdmOWY0XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg";
   let book3 = "https://m.media-amazon.com/images/M/MV5BNGUzN2M0YTEtZTk4OC00MGI1LWI2MGYtN2QyM2M1NzU3OGM0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Apothecary Diaries" height={200}/>
         <img src={book2} alt="Raven of the Inner Palace" height={200}/>
         <img src={book3} alt="Sugar Apple Fairy Tale" height={200}/>
      </div>      
   );
}