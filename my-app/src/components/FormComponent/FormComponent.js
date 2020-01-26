import React, {Component} from 'react';

import {connect} from 'react-redux';

import {
    getFormData,
    sendFormData,
    setInputValue,
    setSendNotificationStatus
} from "../../actions/FormActions/formActions";

import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import Form from "arui-feather/form";
import Select from "arui-feather/select";

import './FormComponent.css';
import Spin from "arui-feather/spin";
import Notification from "arui-feather/notification";

class FormComponent extends Component {
    state = {
        finalForm: {}
    };

    handleChange = (e, name) => {
        this.setState({
            finalForm: {...this.state.finalForm, [name]: e}
        });
        //console.log(name);
        //setInputValue({value: e, name});
    };

    onSubmit = (e) => {

        //console.log('hello, my friend');
        this.props.sendFormData(this.state.finalForm);
    };

    componentDidMount() {
        this.props.getFormData()
    };

    setInputType = (type, values, name) => {

        switch (type) {
            case 'TEXT':
                return <Input type='text' name={name} onChange={e => this.handleChange(e, name)}/>;
            case 'NUMERIC':
                return <Input type='number' name={name} onChange={e => this.handleChange(e, name)}/>;
            case 'LIST':
                const options = [
                    {value: values.none, text: values.none},
                    {value: values.v1, text: values.v1},
                    {value: values.v2, text: values.v2},
                    {value: values.v3, text: values.v3}
                ];
                return <Select name={name} mode="radio-check" options={options}
                               onChange={e => this.handleChange(e[0], name)}/>

        }
    };

    render() {
        const {form, isFormSending, isSentNotification, setSendNotificationStatus} = this.props;
        //console.log(this.props);
        return form ? (
            <Form onSubmit={this.onSubmit} className="App">
                <h2>{form.title}</h2>
                <img src={form.image} alt='image'/>
                <table border='1'>
                    <tbody>
                    {form.fields.map((field, index) => (
                        <tr key={index}>
                            <td>
                                <h5>{field.title}</h5>
                            </td>
                            <td>{this.setInputType(field.type, field.values, field.name)}</td>
                        </tr>))}
                    </tbody>
                </table>
                <Button view='extra' type='submit' icon={<Spin visible={isFormSending}/>}>Send</Button>
                <Notification
                    visible={isSentNotification}
                    status='ok'
                    offset={ 12 }
                    stickTo='left'
                    title='Success'
                    onCloseTimeout={ () => { setSendNotificationStatus(false); } }
                    onCloserClick={ () => { setSendNotificationStatus(false); } }
                >
                    Form has been sent.
                </Notification>
            </Form>
        ) : (<div>Loading</div>)
    };
}

const mapStateToProps = (state) => ({
    //console.log(state)
    isFormSending: state.formReducers.isFormSending,
    isSentNotification: state.formReducers.isSentNotification,
    form: state.formReducers.form
});

export default connect(
    mapStateToProps,
    {
        getFormData,
        sendFormData,
        setInputValue,
        setSendNotificationStatus
    }
)(FormComponent);