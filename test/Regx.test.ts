import Regx from "./../src/Regx"

test('Should format', ()=>{
    const regx = new Regx('05050678200');
    expect(regx.make('###.###.###-##')).toBe('050.506.782-00')
})