import config from "./config.json";

export default class MyConfiguration {
    private static instance: MyConfiguration;
    // Hace referencia a si mismo, para que siempre retorne la referencia que se ha guardado

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    private constructor() { }

    private static initialize(): void {
        this._connectionString = config.connectionString;
        this._environment = config.environment;
        this._apiUrl = config.apiUrl;
    }

    public static getInstance(): MyConfiguration {
        if (!this.instance) {
            this.initialize();
            this.instance = new MyConfiguration();
        }

        return this.instance;
    }

    get connectionString(): string {
        return MyConfiguration._connectionString;
    }

    get enviroment(): string {
        return MyConfiguration._environment;
    }

    get apiUrl(): string {
        return MyConfiguration._apiUrl;
    }
}