
export default function Home({countries}) {

    const styles = {
        container: {
            'display': "flex",
            'flex-wrap': "wrap",
            'align-items': "center",
            'justify-content': "center",
        },
        card:{
            width: '200px',
            border: '1px solid #ccc',
            'border-radius': '10px',
            margin: '10px',
            'padding': '10px',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
        }, 
        img : {
            'width': '200px',
            'object-fit': 'cover',
        }
      };



    return(
        <div style={styles.container}>
           {countries.map(country => (
            <div key={country.cca3} className='countryCard' style={styles.card}>
                <img style={styles.img} src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
                <h2>{country.name.common}</h2>
            </div>
        ))}
        </div>
    )
}