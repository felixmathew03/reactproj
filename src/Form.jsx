import React,{Component} from "react";

class Form extends Component {
    state={name:"",age:"",dob:"",email:"",phone:"",place:"",details:[]}
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({details:[...this.state.details,{name:this.state.name,age:this.state.age,dob:this.state.dob,email:this.state.email,phone:this.state.phone,place:this.state.place}],name:"",age:"",dob:"",email:"",phone:"",place:""})
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (<>
            <div className="form">
                <form >
                    <input type="text" name="name"  placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="age"  placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
                    <input type="date" name="dob"  placeholder="Date of Birth" value={this.state.dob} onChange={this.handleChange}/>
                    <input type="email" name="email"  placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="number" name="phone"  placeholder="Phone" value={this.state.phone} onChange={this.handleChange}/>
                    <input type="text" name="place"  placeholder="Place" value={this.state.place} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="details">
            {
                this.state.details.map((d,ind)=>{
                    return (
                        <div className="detail" key={ind}>
                            <p>Name: {d.name}</p>
                            <p>Age: {d.age}</p>
                            <p>DOB: {d.dob}</p>
                            <p>Email: {d.email}</p>
                            <p>Phone: {d.phone}</p>
                            <p>Place: {d.place}</p>
                        </div>
                    )
                })
            }
            </div>
            </>
        )
    }
}
export default Form;