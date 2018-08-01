import {mapStateToProps, QuestionDetailDisplay} from "../QuestionDetail";
import renderer from 'react-test-renderer';
import React from 'react';

describe('The Question Detail Component', () => {
  describe("The container", () => {
    describe("mapStateToProps", () => {
      it("should map state to props correctly", () => {

        const sampleQuestion = {
          question_id: 42,
          body: 'Space is big'
        };

        const appState = {
          questions: [sampleQuestion]
        };

        const ownProps = {
          question_id: 42
        };

        const componentState = mapStateToProps(appState, ownProps);

        expect(componentState).toEqual(sampleQuestion);

      });
    });
  });


  describe("The display", () => {
    it('Should not regress', () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="Hello"
          body="43"
          answer_count={2}
          tags={['stuff']}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();

    });
  });

});