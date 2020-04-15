import React from 'react'



class TherapistSU extends React.Component{
    constructor(){
        super()
        this.state= {

        }
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        })
    }

    handleForm = (event) => {
        event.preventDefault()
        // console.log(this.state)
        const token = localStorage.getItem('token')
        const newTherapistObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`},
            body: JSON.stringify(this.state)
        }
    
        fetch('http://localhost:3000/therapists', newTherapistObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                alert(data.error)}
            else { 
               
                    localStorage.setItem('token', data.token)
                    this.props.profileInfo(data)
                    this.props.history.push('/home')
                
            }

            
            }
        ) 
    
}

    render(){
        console.log(this.props)
        
        return(
            <div>


                <div>
                    {/* <form onSubmit= {(event) => this.handleForm(event)} action=""> */}
                            <label htmlFor="location">Location</label>
                        <div>
                            <input onChange= {(event) => this.props.handleInputChange(event)} type="text" name="location" id="" placeholder='City, State'/>
                        </div>

                            <label htmlFor="services">Services</label>
                        <div>
                            <input onChange= {(event) => this.props.handleInputChange(event)} type="text" name="services" id="" placeholder="Deep Tissue, Swedish, Thai"/>
                        </div>

                            <label htmlFor="specialties">Specialty</label>
                        <div>
                            <input onChange= {(event) => this.props.handleInputChange(event)} type="text" name="specialty" id="" placeholder="Swedish" />
                        </div>

                        <label htmlFor="bio">Biography</label>
                        <div>
                        <textarea onChange= {(event) => this.props.handleInputChange(event)} name="bio" id="" cols="30" rows="10" maxLength='250'></textarea>
                        </div>
                        {/* <input type="submit" value="Signup"/> */}

                    {/* </form> */}
                </div>
            </div>
        )
    }
}

export default TherapistSU


