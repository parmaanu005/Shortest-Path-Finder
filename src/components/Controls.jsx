import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import styled from "@emotion/styled";
import { FaRandom } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";

import { cellType, wallType, entryType, exitType } from "../common/config";
import { randomMazeGenerator } from "../common/helper";

const buttonsColorMap = new Map([
  [wallType, "secondary"],
  [entryType, "violet"],
  [exitType, "red"],
  [cellType, "teal"],
]);

const Row = styled.div`
  margin-top: 10px;
`;

const WebButtons = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  padding-bottom: 20px;

  .web-icons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      font-size: 15px;
      font-weight: bold;
      padding: 6px 12px;
    }
  }
`;

const MobileButtons = styled.div`
  display: flex;
  justify-content: center;

  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Section = styled.div`
  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1 1 0px;
  }
`;

export function Controls({
  rows,
  cols,
  entry,
  exit,
  setGrid,
  startBFS,
  clickType,
  setClickType,
  isInProgress,
  resetGrid,
}) {
  function randomGrid() {
    isInProgress.current = false;
    const [grid, newEntry, newExit] = randomMazeGenerator(rows, cols);
    entry.current = newEntry;
    exit.current = newExit;
    setGrid(grid);
  }

  const isDisabled = isInProgress.current;

  // Customized Reactive Button
  const MyReactiveButton = function ({ text, type }) {
    return (
      <ReactiveButton
        onClick={() => setClickType(type)}
        color={buttonsColorMap.get(type)}
        disabled={isInProgress.current}
        idleText={text}
        outline={clickType !== type}
        size="normal"
      />
    );
  };

  return (
    <Row>
      <WebButtons>
        <Section>
          <MyReactiveButton text="Entry" type={entryType} />
          <MyReactiveButton text="Exit" type={exitType} />
          <MyReactiveButton text="Wall" type={wallType} />
          <MyReactiveButton text="Clear" type={cellType} />
        </Section>
        <Section>
          <ReactiveButton
            onClick={startBFS}
            disabled={isDisabled}
            idleText="Search Path"
            color="primary"
            size="large"
          />
        </Section>
        <Section>
          <ReactiveButton
            onClick={resetGrid}
            idleText="Reset"
            size="normal"
            outline
          />
          <ReactiveButton
            onClick={randomGrid}
            idleText="Random Maze"
            size="normal"
            outline
          />
        </Section>
      </WebButtons>

      <MobileButtons>
        <Section>
          <MyReactiveButton text={<IoEnterOutline />} type={entryType} />
          <MyReactiveButton text={<IoExitOutline />} type={exitType} />
          <MyReactiveButton text={<MdBlock />} type={wallType} />
          <MyReactiveButton text={<CgTrashEmpty />} type={cellType} />
        </Section>
        <Section>
          <ReactiveButton
            onClick={startBFS}
            disabled={isDisabled}
            idleText={<BsPlay />}
          />
        </Section>
        <Section>
          <ReactiveButton
            onClick={resetGrid}
            idleText={<GrPowerReset />}
            outline
          />
          <ReactiveButton
            onClick={randomGrid}
            idleText={<FaRandom />}
            outline
          />
        </Section>
      </MobileButtons>
    </Row>
  );
}
