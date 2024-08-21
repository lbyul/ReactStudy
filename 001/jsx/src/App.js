function App() {

  const time = new Date();


  return (
    <div>
      <div style={{backgroundColor: 'pink', color: 'green', fontSize:'24px', fontWeight: 'bold'}}>
        <p>년: {time.getFullYear()}</p>
        <p>월/일: {time.getMonth() + 1}/{time.getDate()}</p>
        <p>시간: {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초</p>
      </div>
    </div>
  );
}
export default App;
