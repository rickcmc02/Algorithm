def solution(prgrss, spds):
    answer = []
    addLst = []
    
    addLst = prgrss
    nSpds = spds
    nComp = 0
    i = 0

    while min(addLst) < 100 :
        addLst = [x + y for x, y in zip(prgrss, nSpds)]
        nSpds = [x + y for x, y in zip(nSpds, spds)]
    
        while addLst[i] >= 100 :
            nComp += 1
            if i < len(addLst) - 1 :
                i += 1
            else :
                break
        
        if nComp > 0 :
            answer.append(nComp)
            nComp = 0
        
    return answer