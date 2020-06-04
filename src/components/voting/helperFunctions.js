
export const getOptionsSortedAccordingToVoterCount = (optionsWithVoters) => {
    const sortedOptions = optionsWithVoters.sort((option1, option2) => {
        const count1 = option1.voters.length
        const count2 = option2.voters.length
        return count2 - count1
    })
    return sortedOptions
}




