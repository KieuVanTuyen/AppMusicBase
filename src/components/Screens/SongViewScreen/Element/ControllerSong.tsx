import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Tim from "../../../../assets/IconSvgs/HeartLike.svg";
import List from "../../../../assets/IconSvgs/List.svg";
import NoRepeat from "../../../../assets/IconSvgs/NoRepeat.svg";
import RepeatOne from "../../../../assets/IconSvgs/RepeatOne.svg";
import RepeatAll from "../../../../assets/IconSvgs/RepeatAll.svg";
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";
import { RepeatMode } from "react-native-track-player";

const ControllerSong = ({ repeatMode, handleRepeatMode }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ContainerButtonSongPlay}>
                <View style={styles.ButtonSongPlay}>
                    <TouchableOpacity>
                        <Tim />
                    </TouchableOpacity>
                    <View style={styles.ButtonAction}>
                        <List />
                    </View>
                    <View>
                        <TouchableOpacity onPress={handleRepeatMode}>
                            {repeatMode === RepeatMode.Off && <NoRepeat />}
                            {repeatMode === RepeatMode.Track && <RepeatOne />}
                            {repeatMode === RepeatMode.Queue && <RepeatAll />}
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        height: ratioH(96),
    },
    ContainerButtonSongPlay: {
        bottom: 0,
        position: 'absolute',
        height: ratioH(80),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a6b9ff',
        borderTopLeftRadius: ratioW(16),
        borderTopRightRadius: ratioW(16),
    },
    ButtonSongPlay: {
        flexDirection: 'row',
        gap: 16,
        height: ratioH(64),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a6b9ff',
    },
    ButtonAction: {
        height: ratioH(64),
        width: ratioW(99),
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ControllerSong;
