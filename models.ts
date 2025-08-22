export interface PluginSettings {
	pluginVersion: string; // Version of the plugin
	tasks: MergeTask[]; // Array of merge tasks
}

export interface MergeTask {
	id: string;
	name: string;
	pluginVersion: string;
	enabled: boolean;
	eventTrigger: string; // dynamic, can be any event name
	includePath: string;
	savePath: string;
	orderBy?: string | ((a: unknown, b: unknown) => number); // string or function for extensibility
	orderDirection?: 'asc' | 'desc';
	lastRun?: Date; // Optional, to track last run time
	lastRunResult?: string; // Optional, to store the result of the last run
}
