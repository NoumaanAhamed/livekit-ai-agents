'use client';
import {
  BarVisualizer,
  LiveKitRoom,
  RoomAudioRenderer,
  useVoiceAssistant,
  VoiceAssistantControlBar,
} from '@livekit/components-react';
import "@livekit/components-styles";
import { useState } from "react";

export default function Main() {
  const [token, setToken] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  return (
    <>
      <main data-lk-theme="default">
        {token === null ? (<div className="lk-focus-layout"><button className="lk-button" onClick={async () => {
          const { accessToken, url } = await fetch('/api/token').then(res => res.json());
          setToken(accessToken);
          setUrl(url);
        }}>Connect</button></div>) : (
          <LiveKitRoom
            token={token}
            serverUrl={url!} // url is guaranteed to be set
            connectOptions={{ autoSubscribe: true }}
            data-lk-theme="default"
            style={{ height: '100dvh' }}
          >
            <SimpleVoiceAssistant />
            <VoiceAssistantControlBar />
            <RoomAudioRenderer />
          </LiveKitRoom>
        )}
      </main>
    </>
  );
};

const SimpleVoiceAssistant = () => {
  const { state, audioTrack } = useVoiceAssistant();
  return (
    <>
      <BarVisualizer
        state={state}
        barCount={7}
        trackRef={audioTrack}
        style={{ height: '300px' }}
      />
    </>
  );
};