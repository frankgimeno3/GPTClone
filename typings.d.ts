interface Message {
    text: any;
    createdAt: OfflineAudioCompletionEventInit.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar:string;
      }
}