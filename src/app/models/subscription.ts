export interface Subscription {
	id: number;
	name: string;
	type: 'MOBILE' | 'TELEVISION' | 'INTERNET' | 'TELEPHONY';
	usage?: Usage[];
}

export interface Usage {
	type: 'DATA' | 'SMS';
	used: number;
	limit: number;
}