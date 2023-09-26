workspace.clientDemandsAttentionChanged.connect((client, set) => {
    if (set) {
        client.keepAbove = true;
        client.minimized = false;
    }
    else{
        client.keepAbove = false;
    }
});
