workspace.clientDemandsAttentionChanged.connect((client, set) => {
    if (set) {
        client.keepAbove = true;
    }
    else{
        client.keepAbove = false;
    }
});
