interface CordovaPlugins
{
	VideoMetadata: {
		file: (
			src: string,
			successCallback: (data: {
				width: number,
				height: number,
				rotation: number,
				duration: number,
				bitrate: number
			}) => void,
			errorCallback: (err: any) => void
		) => void;
	}
}