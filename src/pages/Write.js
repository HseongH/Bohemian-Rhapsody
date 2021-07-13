// LIBRARY
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// HISTORY
import { history } from '../redux/configStore';

// ELEMENTS
import { Grid, Button, Input, Text, Image } from '../elements/index';

// REDUX
import { imgActions } from '../redux/modules/image';
import { postActions } from '../redux/modules/post';

// ICON
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const PosAbs = () => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
  `;
};

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  box-sizing: border-box;
  ${PosAbs()};
  z-index: 3;
`;

const InputFile = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  ${PosAbs()};
`;

const InputArea = styled.textarea`
  --lightcolor: #6c757d;

  width: 100%;
  height: 158px;
  resize: none;
  padding: 8px 15px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px inset;
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--lightcolor);
  }

  &::-webkit-input-placeholder {
    color: var(--lightcolor);
  }

  &:-ms-input-placeholder {
    color: var(--lightcolor);
  }
`;

const Write = (props) => {
  const { postInfo } = props;
  console.log(postInfo);

  const dispatch = useDispatch();
  const image = useSelector((state) => state.image);
  const preview = postInfo ? postInfo.img : image.preview;
  const imgUrl = image.imageUrl;

  const [height, setHeight] = useState(preview ? 'auto' : '380px');
  const [contents, setContents] = useState({
    title: postInfo ? postInfo.title : '',
    artist: postInfo ? postInfo.artist : '',
    showDate: postInfo ? postInfo.showDate : '',
    description: postInfo ? postInfo.description : '',
  });

  const fileInput = useRef();

  const createPost = () => {
    if (!fileInput.current.value) {
      window.alert('이미지를 추가해 주세요.');
      return;
    }

    dispatch(postActions.createPostDB(fileInput.current.files[0], contents));
    dispatch(imgActions.setPreview(null));
    history.push('/');
  };

  const modifyPost = () => {
    if (preview !== imgUrl) {
      const newPostInfo = { ...postInfo, img: null };

      dispatch(postActions.updatePostDB(postInfo.postId, newPostInfo, fileInput.current.files[0]));
    } else {
      dispatch(postActions.updatePostDB(postInfo.postId, postInfo));
    }

    history.push('/');
  };

  const selectFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        dispatch(imgActions.setPreview(reader.result));
        setHeight('auto');
      };
    }
  };

  return (
    <Grid
      width="820px"
      is_flex="space-between"
      margin="50px auto"
      padding="30px 40px"
      radius="20px"
      shadow
      tabletStyle={() => {
        return css`
          display: block;
          width: auto;
          max-width: 430px;
        `;
      }}
    >
      <Grid
        width="320px"
        margin="0 30px 0 0"
        tabletStyle={() => {
          return css`
            margin: 0 auto;
          `;
        }}
      >
        <Grid bg="#EFEFEF" radius="10px" style={{ height: `${height}`, position: 'relative' }}>
          <LabelStyle htmlFor="input--file">
            {!preview ? (
              <>
                <InsertPhotoIcon />
                이미지 추가
              </>
            ) : null}
          </LabelStyle>

          <InputFile
            type="file"
            id="input--file"
            ref={fileInput}
            accept="image/png, image/jpeg"
            onChange={selectFile}
          />

          <Image style={{ position: 'absolute', left: 0, top: 0 }} src={preview} />
        </Grid>
      </Grid>

      <Grid
        style={{ flex: 1 }}
        tabletStyle={() => {
          return css`
            margin-top: 20px;
          `;
        }}
      >
        <Input
          value={contents.title}
          fontSize="23px"
          placeholder="제목을 입력해주세요."
          margin="0 0 20px"
          style={{ fontWeight: 700 }}
          changeEvent={(event) => {
            setContents({ ...contents, title: event.target.value });
          }}
        />

        <Input
          value={contents.artist}
          margin="0 0 20px"
          placeholder="가수 이름을 입력해주세요."
          changeEvent={(event) => {
            setContents({ ...contents, artist: event.target.value });
          }}
        />

        <Text fontSize="12px" lineHeight="2" textIndent="15px">
          발매 일자 / 공연 일자를 선택해 주세요.
        </Text>
        <Input
          value={contents.showDate}
          margin="0 0 20px"
          type="date"
          changeEvent={(event) => {
            setContents({ ...contents, showDate: event.target.value });
          }}
        />

        <InputArea
          value={contents.description}
          placeholder="간단한 내용을 입력해주세요."
          onChange={(event) => {
            setContents({ ...contents, description: event.target.value });
          }}
        ></InputArea>

        <Button
          width="100%"
          height="auto"
          padding="12px 0"
          radius="20px"
          clickEvent={postInfo ? modifyPost : createPost}
        >
          {postInfo ? '수정하기' : '작성 완료'}
        </Button>
      </Grid>
    </Grid>
  );
};

Write.defaultProps = {};

export default Write;
