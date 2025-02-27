import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastForward from "../../../../assets/IconSvgs/FastForward.svg";
import ButtonPause from "../../../../assets/IconSvgs/ButtonPause.svg";
import ButtonPlay from "../../../../assets/IconSvgs/ButtonPlay.svg";
import FastForward2 from "../../../../assets/IconSvgs/FastForward2.svg";
import React from "react";
import { ratioH, ratioW } from "../../../../utils/RatioScale";
import Slider from "@react-native-community/slider";


const PlayerSong = ({
                        isLoading,
                        isPlaying,
                        position,
                        duration,
                        sliderValue,
                        handlePlayPause,
                        handleSkipToPrevious,
                        handleSkipToNext,
                        formatTime,
                        handleSliderValueChange
                    }) => {
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <>
                    <View style={styles.PlayStop}>
                        <TouchableOpacity
                            onPress={handleSkipToPrevious}
                            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                        >
                            <FastForward />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlayPause}>
                            {!isPlaying ? <ButtonPause /> : <ButtonPlay />}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleSkipToNext}
                            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                        >
                            <FastForward2 />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.TimeSongPlay}>
                        <Text>{formatTime(position)}</Text>
                        <View style={styles.sliderContainer}>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={duration}
                                value={sliderValue}
                                onValueChange={handleSliderValueChange}
                                minimumTrackTintColor="black"
                                maximumTrackTintColor="#ccc"
                                thumbTintColor="black"
                            />
                        </View>
                        <Text>{formatTime(duration)}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        top: ratioH(48),
        height: ratioH(150),

    },
    PlayStop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        height: ratioH(80),
        gap: 24,
        borderRadius:50,
        backgroundColor:'white'
    },
    TimeSongPlay: {
        top: ratioH(24),
        height: ratioH(48),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    sliderContainer: {
        width: ratioW(207),
        height: ratioH(16),
        borderRadius: 20,

        backgroundColor:'gray'
    },
    slider: {
        flex: 1,
    },
});

export default PlayerSong;
