import {questions} from './questions';

describe("The questions reducer", () => {
  it("should not modify state for unrecognized action", () => {
    const state = ['foo', 'bar'];
    const newState = questions(state, {type: "UNRECOGNIZED_ACTION"});
    expect(newState).toEqual(state);
    expect(newState).toBe(state);
  });

  it("should add new questions", () => {
    const state = [{question_id: 'foo'}, {question_id: 'bar'}];
    const newQuestion = {question_id: 'baz'};
    const newState = questions(state, {type: 'FETCHED_QUESTION', question: newQuestion});

    expect(newState).toContain(newQuestion);
    expect(state).not.toContain(newQuestion);
    expect(newState).toHaveLength(3);
  });
});