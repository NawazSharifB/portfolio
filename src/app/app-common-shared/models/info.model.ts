export class InfoModel {
    title: string;
    images: string[];
    details: string[];
    tools: string;
    links: {
        livePreview: string;
        github: string;
    };
    actionAvailable: boolean;
    id: number;
    uid: string;
}
