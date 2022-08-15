import React from 'react';
type Prop = {
	name : string;
}
const HelloMessage: React.FC<Prop>  = ({ name }) => <h1>Hello, {name}!</h1>;

export default HelloMessage;
