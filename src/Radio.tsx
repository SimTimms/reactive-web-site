import { useEffect, useState } from 'react';
import { radio, note2, speaker } from './assets';
import { Typography } from '@mui/material';
import { Note } from './components/Note';
import axios from 'axios';
import qs from 'qs';

export const Radio = (props: { powerOn: boolean }) => {
  const { powerOn } = props;
  const [track, setTrack] = useState<{
    name: string;
    isPlaying: boolean;
    artist: string;
  }>({
    name: '',
    isPlaying: false,
    artist: '',
  });

  useEffect(() => {
    var client_id = 'd6ab89a68d7242e6b8c36a1c61d0a6cb';
    var client_secret = '6f2e5512c0c04e47ae6e8eb3a62f5483';
    var redirect_uri = 'http://localhost:3000';
    const hotshotAccess = '6328da74aca71464f1d4f09e';
    const hotshotRefresh = '6328dabeaca71464f1d4f0a0';
    const hotshotUpdate = 'https://hotshotdb.herokuapp.com';

    const defaultOptions = {
      headers: {
        Authorization: `Basic ${btoa(client_id + ':' + client_secret)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    /*
       const apiCode =
         'AQD7JKr0Pbzs8r4G4espxcQLhwLbZXRUOIuwtj8LbU_4A6ipCEaV-rKPhki0441h9Q5vHKDHkHN465TcLxk-zREEFWt6fAkCg8d-5EiXcJWGCjK1-BorpW7JbV8TR4UqCLGOznj6a7h5tadagGdQgF7HigpIDUVtC27ec0QbL3MfgDR7bmgEl2vzbXM0HFbOA8sSeZeb';

             console.log(
               `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user-read-currently-playing`
             );


    !apiToken &&
      apiCode &&
      axios
        .post(
          'https://accounts.spotify.com/api/token',
          qs.stringify({
            code: apiCode,
            grant_type: 'authorization_code',
            redirect_uri,
          }),
          defaultOptions
        )
        .then(function (response) {
          axios.put(
            `${hotshotUpdate}/${hotshotAccess}/${response.data.access_token}`
          );
          axios.put(
            `${hotshotUpdate}/${hotshotRefresh}/${response.data.refresh_token}`
          );
        })
        .catch(function (error) {
          apiToken && setAPIToken(null);
        })
        .then(function () {
          // always executed
        });
*/
    //api.spotify.com/v1/me/player/currently-playing
    const interval = setInterval(() => {
      axios
        .get(`${hotshotUpdate}/api/${hotshotAccess}`)
        .then(function (response) {
          axios
            .get('https://api.spotify.com/v1/me/player/currently-playing', {
              headers: {
                Authorization: `Bearer ${response.data.value}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            })
            .then(function (response) {
              setTrack({
                name: response.data.item.name,
                isPlaying: response.data.is_playing,
                artist: response.data.item.artists[0].name,
              });
            })
            .catch(function (error) {
              axios
                .get(`${hotshotUpdate}/api/${hotshotRefresh}`)
                .then(function (response) {
                  const refreshTokenA = response.data.value;
                  axios
                    .post(
                      'https://accounts.spotify.com/api/token',
                      qs.stringify({
                        grant_type: 'refresh_token',
                        refresh_token: refreshTokenA,
                      }),
                      defaultOptions
                    )
                    .then(function (response) {
                      const accessTokenA = response.data.access_token;
                      axios.put(
                        `${hotshotUpdate}/${hotshotAccess}/${accessTokenA}`
                      );
                      axios
                        .get(
                          'https://api.spotify.com/v1/me/player/currently-playing',
                          {
                            headers: {
                              Authorization: `Bearer ${accessTokenA}`,
                              'Content-Type': 'application/json',
                              Accept: 'application/json',
                            },
                          }
                        )
                        .then(function (response) {
                          setTrack({
                            name: response.data.item.name,
                            isPlaying: response.data.is_playing,
                            artist: response.data.item.artists[0].name,
                          });
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    })
                    .catch(function (error) {
                      //  apiToken && setAPIToken(null);
                    })
                    .then(function () {
                      // always executed
                    });
                });
            })
            .then(function () {});
        });
    }, 1000);
    return () => clearInterval(interval);

    /*
    

    !apiToken &&
      refreshToken &&
     
*/
  }, [powerOn]);
  return (
    <div
      style={{
        width: '100vw',
        overflow: powerOn ? 'visible' : 'hidden',
        zIndex: 12,
        marginTop: '0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h1"
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: '3vw',
          fontFamily: `'Rubik Burned', cursive`,
          textShadow: '4px 4px 6px rgba(0,0,0,1)',
        }}
      >
        API<span style={{ color: '#aaa' }}>Integrations</span>
      </Typography>
      <div
        style={{
          position: 'relative',
          left: 0,
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
        }}
      >
        <img
          src={radio}
          style={{
            filter: powerOn
              ? 'grayscale(0%) brightness(100%)'
              : 'grayscale(100%) brightness(30%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '70%',
            top: '24%',
            height: '34%',
            left: '14%',
            zIndex: 12,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            overflow: 'hidden',
          }}
        >
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
        </div>
        <div
          style={{
            position: 'absolute',
            width: '40%',
            background: track.isPlaying && powerOn ? '#222' : '#222',
            top: '66%',
            height: '14%',
            left: '28%',
            zIndex: 12,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Typography
            style={{
              color: '#fff',
              fontSize: '1.2vw',
              width: '100%',
              textAlign: 'center',
            }}
            variant="body2"
          >
            {powerOn && track.isPlaying ? track.name : ''}
          </Typography>
          <Typography
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.2vw',
              width: '100%',
              textAlign: 'center',
            }}
            variant="body2"
          >
            {powerOn && track.isPlaying ? track.artist : ''}
          </Typography>
        </div>
      </div>
    </div>
  );
};
