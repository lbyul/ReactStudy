function App() {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();


  return (
    <div>
      <div style={{backgroundColor: 'pink', color: 'green', fontSize:'24px', fontWeight: 'bold'}}>
        <p>년: {year}</p>
        <p>월/일: {month}/{date}</p>
        <p>시간: {hours}시 {minutes}분 {seconds}초</p>
      </div>
    </div>
  );
}
export default App;
