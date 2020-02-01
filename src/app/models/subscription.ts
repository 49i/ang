export interface Subscription {
	id: number;
	name: string;
	type: 'MOBILE' | 'TELEVISION' | 'INTERNET' | 'TELEPHONY';
	usage?: Usage[];
}

interface Usage {
	type: 'DATA' | 'SMS';
	used: number;
	limit: number;
}